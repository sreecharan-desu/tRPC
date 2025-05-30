import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";

const trpc = createTRPCProxyClient<AppRouter>({
    links: [
        httpBatchLink({
            url: 'http://localhost:3000',
            async headers(){
                return {
                    Authorization : "Bearer 1234"
                }
            }
        })
    ]
})

async function main() {
    let response = await trpc.signin.mutate({                                                                                                                                                                                                   
        name: "Sr3X0r",
        password: "uksdvbsdkhj"
    })
    console.log(response)

    // let response2 = await trpc.signup.mutate({
    //     name : "kjzdbvj",
    //     password : "ldsgildsh"
    // })
}


main()
