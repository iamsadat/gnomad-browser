import React from 'react'
import styled from 'styled-components'
import { ExternalLink, List, ListItem, PageHeading } from '@gnomad/ui'

import DocumentTitle from './DocumentTitle'
import InfoPage from './InfoPage'
import Link from './Link'

const Citation = styled.cite`
  font-style: normal;
  line-height: 1.4;
`

export default () => (
  <InfoPage>
    <DocumentTitle title="Publications" />
    <PageHeading>Publications</PageHeading>
    <p>
      This page lists publications by the gnomAD group. For information on how to cite gnomAD data,{' '}
      <Link
        to={{ pathname: '/faq', hash: '#how-should-i-cite-discoveries-made-using-gnomad-data' }}
      >
        see the FAQ
      </Link>
      .
    </p>

    <List>
      <ListItem>
        <Citation>
          Karczewski, K. J., Francioli, L. C., Tiao, G., Cummings, B. B., Alföldi, J., Wang, Q.,
          Collins, R. L., Laricchia, K. M., Ganna, A., Birnbaum, D. P., Gauthier, L. D., Brand, H.,
          Solomonson, M., Watts, N. A., Rhodes, D., Singer-Berk, M., England, E. M., Seaby, E. G.,
          Kosmicki, J. A., … MacArthur, D. G. The mutational constraint spectrum quantified from
          variation in 141,456 humans. <em>Nature</em> 581, 434–443 (2020).{' '}
          <ExternalLink href="https://www.nature.com/articles/s41586-020-2308-7">
            https://www.nature.com/articles/s41586-020-2308-7
          </ExternalLink>
        </Citation>
      </ListItem>
      <ListItem>
        <Citation>
          Collins, R. L., Brand, H., Karczewski, K. J., Zhao, X., Alföldi, J., Francioli, L. C.,
          Khera, A. V., Lowther, C., Gauthier, L. D., Wang, H., Watts, N. A., Solomonson, M.,
          O’Donnell-Luria, A., Baumann, A., Munshi, R., Walker, M., Whelan, C., Huang, Y.,
          Brookings, T., … Talkowski, M. E. A structural variation reference for medical and
          population genetics. <em>Nature</em> 581, 444–451 (2020).{' '}
          <ExternalLink href="https://www.nature.com/articles/s41586-020-2287-8">
            https://www.nature.com/articles/s41586-020-2287-8
          </ExternalLink>
        </Citation>
      </ListItem>
      <ListItem>
        <Citation>
          Cummings, B. B., Karczewski, K. J., Kosmicki, J. A., Seaby, E. G., Watts, N. A.,
          Singer-Berk, M., Mudge, J. M., Karjalainen, J., Kyle Satterstrom, F., O’Donnell-Luria, A.,
          Poterba, T., Seed, C., Solomonson, M., Alföldi, J., The Genome Aggregation Database
          Production Team, The Genome Aggregation Database Consortium, Daly, M. J., &amp; MacArthur,
          D. G. Transcript expression-aware annotation improves rare variant interpretation.{' '}
          <em>Nature</em> 581, 452–458 (2020){' '}
          <ExternalLink href="https://www.nature.com/articles/s41586-020-2329-2">
            https://www.nature.com/articles/s41586-020-2329-2
          </ExternalLink>
        </Citation>
      </ListItem>
      <ListItem>
        <Citation>
          Minikel, E. V., Karczewski, K. J., Martin, H. C., Cummings, B. B., Whiffin, N., Rhodes,
          D., Alföldi, J., Trembath, R. C., van Heel, D. A., Daly, M. J., Genome Aggregation
          Database Production Team, Genome Aggregation Database Consortium, Schreiber, S. L., &amp;
          MacArthur, D. G. Evaluating potential drug targets through human loss-of-function genetic
          variation. <em>Nature</em> 581, 459–464 (2020).{' '}
          <ExternalLink href="https://www.nature.com/articles/s41586-020-2267-z">
            https://www.nature.com/articles/s41586-020-2267-z
          </ExternalLink>
        </Citation>
      </ListItem>
      <ListItem>
        <Citation>
          Wang, Q., Pierce-Hoffman, E., Cummings, B. B., Karczewski, K. J., Alföldi, J., Francioli,
          L. C., Gauthier, L. D., Hill, A. J., O’Donnell-Luria, A. H., Genome Aggregation Database
          (gnomAD) Production Team, Genome Aggregation Database (gnomAD) Consortium, &amp;
          MacArthur, D. G. Landscape of multi-nucleotide variants in 125,748 human exomes and 15,708
          genomes. <em>Nature Communications</em> 11, 2539 (2020).{' '}
          <ExternalLink href="https://www.nature.com/articles/s41467-019-12438-5">
            https://www.nature.com/articles/s41467-019-12438-5
          </ExternalLink>
        </Citation>
      </ListItem>
      <ListItem>
        <Citation>
          Whiffin, N., Armean, I. M., Kleinman, A., Marshall, J. L., Minikel, E. V., Goodrich, J.
          K., Quaife, N. M., Cole, J. B., Wang, Q., Karczewski, K. J., Cummings, B. B., Francioli,
          L., Laricchia, K., Guan, A., Alipanahi, B., Morrison, P., Baptista, M. A. S., Merchant, K.
          M., Genome Aggregation Database Production Team, … MacArthur, D. G. The effect of LRRK2
          loss-of-function variants in humans. <em>Nature Medicine</em> (2020).{' '}
          <ExternalLink href="https://www.nature.com/articles/s41591-020-0893-5">
            https://www.nature.com/articles/s41591-020-0893-5
          </ExternalLink>
        </Citation>
      </ListItem>
      <ListItem>
        <Citation>
          Whiffin, N., Karczewski, K. J., Zhang, X., Chothani, S., Smith, M. J., Gareth Evans, D.,
          Roberts, A. M., Quaife, N. M., Schafer, S., Rackham, O., Alföldi, J., O’Donnell-Luria, A.
          H., Francioli, L. C., Genome Aggregation Database (gnomAD) Production Team, Genome
          Aggregation Database (gnomAD) Consortium, Cook, S. A., Barton, P. J. R., MacArthur, D. G.,
          &amp; Ware, J. S. Characterising the loss-of-function impact of 5’ untranslated region
          variants in 15,708 individuals. <em>Nature Communications</em> 11, 2523 (2020).{' '}
          <ExternalLink href="https://www.nature.com/articles/s41467-019-10717-9">
            https://www.nature.com/articles/s41467-019-10717-9
          </ExternalLink>
        </Citation>
      </ListItem>
      <ListItem>
        <Citation>
          Lek, M., Karczewski, K., Minikel, E. et al. Analysis of protein-coding genetic variation
          in 60,706 humans. <span style={{ fontStyle: 'italic' }}>Nature</span> 536, 285–291 (2016).{' '}
          <ExternalLink href="https://doi.org/10.1038/nature19057">
            https://doi.org/10.1038/nature19057
          </ExternalLink>
        </Citation>
      </ListItem>
    </List>
  </InfoPage>
)
