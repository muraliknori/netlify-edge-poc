export default async(request, context) => {
    context.log("Calling hello.js function"); 
    return new Response("Hello World form the edge!", {
        headers: {
            "content-type": "text/html"
        }
    });
}