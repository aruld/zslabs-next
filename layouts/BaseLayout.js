import PropTypes from 'prop-types'
import Link from 'next/link'

import { ReactComponent as LogoSVG } from '~media/logo.svg'
import Container from '~components/Container'

export default function BaseLayout({ children }) {
  return (
    <Container className="my-4 md:my-8">
      <header className="grid gap-4 auto-cols-fr grid-flow-col items-center mb-16">
        <Link href="/">
          <a className="justify-self-start transform duration-200 hover:scale-110 ease-bounce dark:text-gray-100">
            <LogoSVG className="h-12" />
          </a>
        </Link>
        <div className="justify-self-end dark:text-gray-100">stuff</div>
      </header>
      {children}
    </Container>
  )
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
