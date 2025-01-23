import { CustomerContainer, CustomersWrapper, CustomerTextsTitle, CustomerTextsWrapper } from "../assets/styles/CustomerStyles/customer";
import { CustomerTextsText } from "../assets/styles/CustomerStyles/customer.styles";

function Customer () {
    return (
      <CustomersWrapper>
        <CustomerContainer>
          <CustomerTextsWrapper>
            <CustomerTextsTitle>
              Our Happy Customers
            </CustomerTextsTitle>
            <CustomerTextsText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
            </CustomerTextsText>
          </CustomerTextsWrapper>
        </CustomerContainer>
      </CustomersWrapper>
    )
}

export default Customer;
