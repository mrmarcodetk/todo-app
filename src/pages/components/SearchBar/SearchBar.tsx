import { Figure, Section } from "@/pages/styled-components/search-bar.styled"
import { CheckBox } from '@/pages/components'

interface SearchBarInterface { }

const SearchBar: React.FC<SearchBarInterface> = () => {
  return (
    <Section>
      <Figure>
        <CheckBox />
        <strong>Create a new todo</strong>
      </Figure>
    </Section>
  )
}

export default SearchBar