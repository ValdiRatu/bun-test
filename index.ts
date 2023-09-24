import figlet from "figlet";

const server = Bun.serve({
    fetch() {
        const body = figlet.textSync("hot loading?")
        return new Response(body)
    },
    port: 3000
})