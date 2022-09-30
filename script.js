fetch("blog.json")
.then(function(response){
    return response.json();
})
// .then((response)=>response.json())
.then(function(blogs){
    let placeholder=document.querySelector("#data-output");
    let out="";
    console.log(blogs);
    blogs.forEach((blog)=>{
        out+="<tr>";
        out+="<td>"+"<a href='"+blog.link+"'/a>"+blog.blogTitle+"</a>"+"</td>";
        out+="<td>"+blog.autherName+"</td>";
        out+="<td>"+blog.blogTags+"</td>";
        out+="<td>"+blog.source+"</td>";
    })
    placeholder.innerHTML=out;
})