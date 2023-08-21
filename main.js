class Page
{
    constructor(name, div) 
    {
        this.name = name
        this.div = document.getElementById(div)
    }

    SetHeight(height)
    {
        this.div.style.height=height
    }

    Activate()
    {
        this.div.classList.remove('invisible')
        this.div.classList.add('visible')
    }
}

class Website
{
    constructor()
    {
        this.titlebox = document.getElementById('titlebar')
        this.control_bar = document.getElementById('controlbar')
        this.page_height = '85vh'
        //
        this.titlebox.style.backgroundColor = 'maroon'
        this.control_bar.style.backgroundColor = 'pink'
        this.control_bar.style.opacity = '0.5'
    }

    AddPage(page)
    {
        // Add button to control bar
        if ( page.name != 'NULL' ) this.control_bar.innerHTML +=
            "<div class='pagelink'>"+page.name+"</div>";
        // Add page html to body
        page.SetHeight(this.page_height)
        page.Activate()
    }
}

site = new Website()
site.AddPage( new Page('NULL', 'page-title') )
site.AddPage( new Page('Experience', 'page-experience') )
site.AddPage( new Page('Projects', 'page-projects') )

harry = document.getElementById("harry")
title_initial_pos = '50vh'
window.onscroll = updateTitle
window.onresize = updateTitle

function updateTitle() {
    // Scroll position
    threshold_offset = window.innerHeight*.41 //approximate
    diff = Math.max(pageYOffset - threshold_offset, 0)
    console.log(diff)
    harry.style.top = diff+'px'
    // Font size
    target_size = .06*window.innerHeight

}
