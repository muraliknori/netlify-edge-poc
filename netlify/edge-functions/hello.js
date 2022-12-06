export default async(request, context) => {
    context.log("Calling hello.js Function"); 
    return new Response("Hello World form the Edge!", {
        headers: {
            "content-type": "text/html"
        }
    });
}