import GetHeader from "./blocks/header/header";
import { HeaderProvider } from "./blocks/header/header_provider";
import GetMain from "./blocks/mainField/main";
import GetFooter from "./blocks/footer/footer";
import Company from "./blocks/company/company";
import { BankPageProvider } from "./blocks/mainField/bank_page/bank_page_provider";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphQL/query"
import { BrowserRouter, Route } from "react-router-dom"

function App(props) {

    return (

        <ApolloProvider client={client}>
            <BankPageProvider>
                <HeaderProvider>
                    <BrowserRouter>
                        <div className="App">
                            <GetHeader />
                            <Route path="/company" component={Company} />
                            <Route path="/main"    render={()=><GetMain  state={props.state} dispatch={props.dispatch} />} />
                            <GetFooter />
                        </div>
                    </BrowserRouter>
                </HeaderProvider>
            </BankPageProvider>
        </ApolloProvider>

    );
}

export default App;
