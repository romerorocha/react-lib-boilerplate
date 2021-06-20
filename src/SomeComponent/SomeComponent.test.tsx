import { getByRole, render, screen } from '@testing-library/react'
import SomeComponent from '.'

describe('<SomeComponent />', () => {
  it('should render default title and body', () => {
    const { getByRole, getByText } = render(<SomeComponent />)
    getByRole('heading', { name: /hello!/i })
    getByText(/hello, world!/i)
  })
})
