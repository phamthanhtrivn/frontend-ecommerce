import { useRoutes } from 'react-router-dom'
import { routes } from '../../routes'

function AllRoute() {
  const elements = useRoutes(routes)

  return (
    <div>
      {elements}
    </div>
  )
}

export default AllRoute