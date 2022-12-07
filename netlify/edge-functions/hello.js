export default async(request, context) => {
    context.log("Calling hello.js Function Test"); 
    return new Response("Hello World form the Edge!", {
        headers: {
            "content-type": "text/html"
        }
    });
}