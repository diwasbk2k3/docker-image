import express from "express"
const app = express();

app.get("/message", (req, res)=>{
    res.send({message: "Welcome to my server", success:true})
})

app.get("/users", (req, res)=>{
    res.json(
        [
            {
                id: "230185",
                name: "diwas bk",
                address: "gulmi",
                status: "single"
            }
        ]
    )
})


app.get("", (req, res) => {
  res.send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>My Portfolio</title>
  <style>
    body {
      margin:0; font-family:Arial, sans-serif; background:#0f172a; color:#f1f5f9;
    }
    header {
      background:#1e293b; padding:20px; text-align:center;
    }
    header h1 { margin:0; font-size:32px; }
    header p { margin:5px 0 0; font-size:18px; color:#94a3b8; }
    nav {
      display:flex; justify-content:center; gap:20px; margin-top:10px;
    }
    nav a {
      color:#38bdf8; text-decoration:none; font-weight:bold;
    }
    nav a:hover { text-decoration:underline; }

    section {
      padding:50px 20px; max-width:900px; margin:auto;
    }
    h2 { color:#38bdf8; margin-bottom:20px; }

    .about, .projects, .contact {
      background:#1e293b; padding:30px; border-radius:16px;
      margin-bottom:40px; box-shadow:0 8px 20px rgba(0,0,0,0.3);
    }
    .projects-grid {
      display:grid; grid-template-columns:repeat(auto-fit, minmax(250px, 1fr)); gap:20px;
    }
    .card {
      background:#0f172a; padding:20px; border-radius:12px; 
      transition:transform .2s; 
    }
    .card:hover { transform:translateY(-5px); }
    .card h3 { margin:0 0 10px; }
    .card p { color:#94a3b8; }

    footer {
      background:#1e293b; padding:15px; text-align:center; color:#94a3b8;
    }

    button {
      padding:10px 20px; border:none; border-radius:8px;
      background:#38bdf8; color:#0f172a; font-weight:bold; cursor:pointer;
    }
    button:hover { filter:brightness(1.1); }
  </style>
</head>
<body>
  <header>
    <h1>Diwas Bishwokarma</h1>
    <p>💻 Beginner Developer | Learning Docker, Node.js, and Web Development</p>
    <nav>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section id="about">
    <div class="about">
      <h2>About Me</h2>
      <p>Hello 👋 I'm Diwas, a passionate beginner in programming. I enjoy learning Java, Python, Django, Docker, and working with databases. I like to build simple projects that connect ideas to practical applications.</p>
    </div>
  </section>

  <section id="projects">
    <div class="projects">
      <h2>Projects</h2>
      <div class="projects-grid">
        <div class="card">
          <h3>☕ Hamro Cafe</h3>
          <p>A Java Swing billing system with login/signup and CRUD operations.</p>
        </div>
        <div class="card">
          <h3>📚 Kittabooks</h3>
          <p>An online bookstore project built with my group for learning teamwork and databases.</p>
        </div>
        <div class="card">
          <h3>🧮 Math Utility Hub</h3>
          <p>A Django project with tools like prime checker, interest calculator, and equation solvers.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="contact">
    <div class="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to connect, feel free to reach out:</p>
      <p>📧 <strong>diwas@example.com</strong></p>
      <button onclick="alert('Thanks for reaching out!')">Say Hello 👋</button>
    </div>
  </section>

  <footer>
    <p>© 2025 Diwas Bishwokarma | Built with ❤️ using Express.js</p>
  </footer>
</body>
</html>`);
});


app.listen(4200, ()=>{
    console.log("SERVER IS RUNNING ON THE PORT 4200.")
})
