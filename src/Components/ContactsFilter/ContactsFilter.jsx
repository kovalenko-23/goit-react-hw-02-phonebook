import styled from "@emotion/styled";

const Wrapper = styled.div`
  margin-bottom: 30px;
`;
const Filterlabel = styled.label`
  padding: 15px;
  border: 1px solid black;
  font-weight: bold;
`;
const FilterInput = styled.input`
  margin-left: 8px;
`;

export const ContactsFilter = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Filterlabel>
        Find
        <FilterInput
          type="text"
          name="message"
          value={value}
          onChange={onChange}
        />
      </Filterlabel>
    </Wrapper>
  );
};
