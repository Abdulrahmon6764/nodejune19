let http = require('http')
let server = http.createServer((req,res)=>{
res.setHeader('Content-Type','text/HTML')
res.write('<!DOCTYPE html>')
res.write('<html>')
res.write(`<body>
<h1 style="color: red; text-align:center;" ">Welcome to Node.js Class</h1>
<ol>
    <h1><mark>About_Me</mark></h1>
    <img src="https://i.pinimg.com/474x/ef/16/e4/ef16e4e68b0d3cb81e6bb8a8c3258d7e--work-desk-motion-design.jpg" />
   <p>
   My name is Usman AbdulRahmon, and I am a Student based in Osun State Osogbo.<br></br> I have always been passionate about <mark>software Engineering</mark>, which has driven me to pursue a career in be a mark <mark>software Engineering</mark>.

Throughout my life, I have worked hard to develop my skills and expertise,<br></br> and I am always striving to learn and improve.<br></br> I believe that continuous learning and personal growth are essential for<br></br> achieving success in both personal and professional life.

In my free time, I enjoy playing game <mark>(pes football)</mark>, which helps me to relax and recharge after a long day at work. I am also an avid reader and enjoy exploring new books and ideas.
   </p>
    </ol>
</body>
`)
res.end()
})
server.listen(4000)