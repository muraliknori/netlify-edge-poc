export default async(request, context) => {
    context.log("calling hello.js function"); 
    return new Response("Hello World form the edge!", {
        headers: {
            "content-type": "text/html"
        }
    });
}