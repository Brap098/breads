const React = require('react')
const Default = require('./layouts/Default')

function Default(html) {
  return (
    <html>
    <head>
      <title>Default</title>
    </head>
    <body>
      <h1>HTML Rendered!</h1>
      <div className="container">
        {html.children}
      </div>
    </body>
    </html>

  )
}

function Index ({breads})  {
    return (
        <Default>
        <h2>Index Page</h2>
        {/* This is a JSX comment. */}
        {/* <p>I have {breads[0].name} bread!</p> */}
            <url>
                {
                    breads.map((bread, index)=> {
                        return (<li key={index}>
                            <a href={`/breads/${index}`}>
                            {bread.name}
                            </a>
                        </li>)
                    })
                }
            </url>


      </Default>
      
    )
}


module.exports = Index

module.exports = Default
