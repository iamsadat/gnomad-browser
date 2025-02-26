import React from 'react'

import {
  referenceGenome,
  labelForDataset,
  DatasetId,
  hasMitochondrialVariants,
} from '@gnomad/dataset-metadata/metadata'
import ClinvarVariantTrack from '../ClinvarVariantsTrack/ClinvarVariantTrack'
import formatClinvarDate from '../ClinvarVariantsTrack/formatClinvarDate'
import Link from '../Link'
import Query from '../Query'
import filterVariantsInZoomRegion from '../RegionViewer/filterVariantsInZoomRegion'
import StatusMessage from '../StatusMessage'
import { TrackPageSection } from '../TrackPage'
import MitochondrialVariants from '../MitochondrialVariantList/MitochondrialVariants'
import annotateVariantsWithClinvar from '../VariantList/annotateVariantsWithClinvar'

const operationName = 'MitochondrialVariantsInTranscript'
const query = `
query ${operationName}($transcriptId: String!, $datasetId: DatasetId!, $referenceGenome: ReferenceGenomeId!) {
  meta {
    clinvar_release_date
  }
  transcript(transcript_id: $transcriptId, reference_genome: $referenceGenome) {
    clinvar_variants {
      clinical_significance
      clinvar_variation_id
      gnomad {
        exome {
          ac
          an
          filters
        }
        genome {
          ac
          an
          filters
        }
      }
      gold_stars
      hgvsc
      hgvsp
      in_gnomad
      major_consequence
      pos
      review_status
      transcript_id
      variant_id
    }
    mitochondrial_variants(dataset: $datasetId) {
      ac_het
      ac_hom
      an
      consequence
      filters
      flags
      gene_id
      gene_symbol
      transcript_id
      hgvsc
      hgvsp
      lof
      lof_filter
      lof_flags
      max_heteroplasmy
      pos
      reference_genome
      variant_id
    }
  }
}
`

type Props = {
  datasetId: DatasetId
  transcript: {
    transcript_id: string
  }
  zoomRegion?: {
    start: number
    stop: number
  } | null
}

const MitochondrialVariantsInTranscript = ({
  datasetId,
  transcript,
  zoomRegion = null,
  ...rest
}: Props) => {
  if (!hasMitochondrialVariants(datasetId)) {
    return (
      <StatusMessage>
        Mitochondrial variants are not available in {labelForDataset(datasetId)}
        <br />
        <br />
        <Link
          to={`/transcript/${transcript.transcript_id}?dataset=gnomad_r3`}
          preserveSelectedDataset={false}
        >
          View this transcript in gnomAD v3.1 to see mitochondrial variants
        </Link>
      </StatusMessage>
    )
  }

  return (
    <Query
      operationName={operationName}
      query={query}
      variables={{
        datasetId,
        transcriptId: transcript.transcript_id,
        referenceGenome: referenceGenome(datasetId),
      }}
      loadingMessage="Loading variants"
      errorMessage="Unable to load variants"
      success={(data: any) => data.transcript && data.transcript.mitochondrial_variants}
    >
      {({ data }: any) => {
        data.transcript.mitochondrial_variants.forEach((v: any) => {
          /* eslint-disable no-param-reassign */
          if (v.an !== 0) {
            v.af = (v.ac_het + v.ac_hom) / v.an
            v.af_het = v.ac_het / v.an
            v.af_hom = v.ac_hom / v.an
          } else {
            v.af = 0
            v.af_het = 0
            v.af_hom = 0
          }
          v.hgvs = v.hgvsp || v.hgvsc
          /* eslint-enable no-param-reassign */
        })

        return (
          <>
            <TrackPageSection>
              <h2>ClinVar variants</h2>
            </TrackPageSection>
            {data.transcript.clinvar_variants.length > 0 ? (
              <>
                <ClinvarVariantTrack
                  referenceGenome={referenceGenome(datasetId)}
                  transcripts={[transcript]}
                  variants={filterVariantsInZoomRegion(
                    data.transcript.clinvar_variants,
                    zoomRegion
                  )}
                />
                <TrackPageSection as="p">
                  Data displayed here is from ClinVar&apos;s{' '}
                  {formatClinvarDate(data.meta.clinvar_release_date)} release.
                </TrackPageSection>
              </>
            ) : (
              <TrackPageSection as="p">
                No ClinVar variants found in this transcript.
              </TrackPageSection>
            )}

            <MitochondrialVariants
              {...rest}
              clinvarReleaseDate={data.meta.clinvar_release_date}
              context={transcript}
              exportFileName={`gnomad_mitochondrial_variants_${transcript.transcript_id}`}
              variants={filterVariantsInZoomRegion(
                annotateVariantsWithClinvar(
                  data.transcript.mitochondrial_variants,
                  data.transcript.clinvar_variants
                ),
                zoomRegion
              )}
            />
          </>
        )
      }}
    </Query>
  )
}

MitochondrialVariantsInTranscript.defaultProps = {
  zoomRegion: null,
} as Partial<Props>

export default MitochondrialVariantsInTranscript
