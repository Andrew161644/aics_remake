import GetHeader from "./blocks/header/header";
import {HeaderProvider} from "./blocks/header/header_provider";
import GetMain from "./blocks/mainField/main";
import GetFooter from "./blocks/footer/footer";
import {BankPageProvider} from "./blocks/mainField/bank_page/bank_page_provider";
import {ApolloProvider} from "@apollo/client";
import {client} from "./graphQL/query"

function App() {

    return (
        <ApolloProvider client={client}>
            <BankPageProvider>
                <HeaderProvider>
                    <div className="App">
                        <GetHeader/>
                        <GetMain/>
                        <GetFooter/>
                    </div>
                </HeaderProvider>
            </BankPageProvider>
        </ApolloProvider>
    );
}

export default App;
