```javascript
<App lang={lang}>
        <MainPage lang={lang}>
            <Blog lang={lang}>
            
            </Blog>
        </MainPage>

        <ContactsPage>
            <Adress>

            </Adress>
        </ContactsPage>
</App>
```
```javascript
<App >
    <Provider value={lang}>
        <MainPage >
            <Blog >
            
            </Blog>
        </MainPage>

        <ContactsPage>
            <Consumer>
                {
                    (lang) => {
                        return (
                            <Adress lang={lang}>
                            </Adress>
                        )
                    }
                }
            </Consumer>

        </ContactsPage>
    </Provider>
</App>
```