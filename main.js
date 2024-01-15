class Page
{
    constructor(name, div) 
    {
        this.name = name
        this.div = document.getElementById(div)
        // set name of anchor element, for URL # access
        if (this.name != "NULL") 
            this.div.children[0].setAttribute('id', this.name)
    }

    SetHeight(height)
    {
        this.div.style.height=height+'vh'
    }

    Activate()
    {
        this.div.classList.remove('invisible')
        this.div.classList.add('visible')
        this.div.style.borderBottom = '1px solid black'
        //if (this.name == "NULL") this.div.style.borderTop = '0px'
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
            "<a onclick='scrollToElement(\""+page.div.children[0].id+"\")'>"+
            page.name+"</a>"+
            "</div>";
        // Add page html to body
        page.SetHeight(this.page_height)
        page.Activate()
    }
}

site = new Website()
site.AddPage( new Page('NULL', 'page-title') )
site.AddPage( new Page('Experience', 'page-one') )
site.AddPage( new Page('Software',   'page-two') )
site.AddPage( new Page('Analysis',   'page-three') )
site.AddPage( new Page('Projects',   'page-four') )

// Need to start populating pages, read from separate file which gives HTML code for a single page?
