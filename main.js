class Page
{
    constructor(name, div, file) 
    {
        this.name = name
        this.div = document.getElementById(div)
        this.file = file
        // set name of anchor element, for URL # access
        if (this.name != "NULL") 
            this.div.children[0].setAttribute('id', this.name)
        this.loadEvent = new Event(name+'PageLoad')
    }

    SetHeight(height)
    {
        this.div.style.height=height+'vh'
    }

    Activate()
    {
        this.div.classList.remove('invisible')
        this.div.classList.add('visible')
        this.div.style.borderBottom = '0px solid black'
        if (this.name == "NULL") {
            //this.div.style.borderTop = '0px'
        } else {
            this.FillContent()
        }
    }

    FillContent()
    {
        // Get file with page content, insert into this page's div
        let xhttp = new XMLHttpRequest();
        let element = this.div
        let input = this.file
        const loadEvent = this.loadEvent
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    element.innerHTML += this.responseText
                    document.dispatchEvent(loadEvent)
                }
                if (this.status == 404) {console.log("Page not found: "+input)}
            }
        }
        xhttp.open("GET", this.file, true);
        xhttp.send();
    }
}

class Website
{
    constructor()
    {
        this.titlebox = document.getElementById('titlebar')
        this.control_bar = document.getElementById('controlbar')
        this.page_height = 85
        this.pages = []
        //
        /*
        this.titlebox.style.backgroundColor = 'maroon'
        this.control_bar.style.backgroundColor = 'pink'
        this.control_bar.style.opacity = '0.5'
        */
    }

    AddPage(page)
    {
        this.pages.push(page)
        // Add button to control bar
        if ( page.name != 'NULL' ) this.control_bar.innerHTML +=
            "<div class='pagelink'>"+
            "<a onclick='scrollToPage(\""+page.div.id+"\")'>"+
            page.name+"</a>"+
            "</div>";
        // Add page html to body
        page.SetHeight(this.page_height)
        page.Activate()
    }
}

class InfoBlock
{
    constructor(container, taglist, title, brief)
    {
        this.container = container
        this.taglist = taglist
        this.title = title
        this.brief = brief
        // define tag text
        this.tagDict = {
            'research' : 'Research',
            'atlas'    : 'ATLAS',
            'analysis' : 'Physics analysis',
            'upgrade'  : 'Detector upgrade'
        }
        // Create HTML elements and add them to the container
        this.GenerateHTML()
        this.container.appendChild(this.maindiv)
    }

    GenerateHTML()
    {
        // create infoblock div
        this.maindiv = document.createElement('div')
        this.maindiv.classList.add('infoblock')
        // create tagline div
        let tagline = document.createElement('div')
        tagline.classList.add('tagline')
        this.maindiv.appendChild(tagline)
        // add tags to tagline
        for ( var tag of this.taglist ) {
            let tag_div = document.createElement('div')
            tag_div.classList.add(tag)
            tag_div.innerHTML += this.tagDict[tag]
            tagline.appendChild(tag_div)
        }
        // add infoblock title
        let h1 = document.createElement('h1')
        h1.innerHTML += this.title
        this.maindiv.appendChild(h1)
        // add brief
        let p = document.createElement('p')
        p.innerHTML += this.brief
        this.maindiv.appendChild(p)
    }

}

site = new Website()
site.AddPage( new Page('NULL', 'page-title') )
site.AddPage( new Page('About me', 'page-one', 'pages/about.html') )
site.AddPage( new Page('Education',   'page-two', 'pages/education.html') )
site.AddPage( new Page('Skills',   'page-three', 'pages/skills.html') )
site.AddPage( new Page('Projects',   'page-four', 'pages/projects.html') )

// Need to start populating pages, read from separate file which gives HTML code for a single page?
