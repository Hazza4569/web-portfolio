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
        /*
        this.titlebox.style.backgroundColor = 'maroon'
        this.control_bar.style.backgroundColor = 'pink'
        this.control_bar.style.opacity = '0.5'
        */
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
l_line = document.getElementById("leftline")
r_line = document.getElementById("rightline")
title_initial_pos = '50vh'
window.onscroll = updateTitle
window.onresize = updateTitle

function updateTitle() {
    // Get browser compatible scroll location:
    let page_offset =
        (pageYOffset) ? pageYOffset :
        (document.documentElement.clientHeight) ? document.documentElement.scrollTop :
        (document.body) ? document.body.scrollTop :
        0;
    // Set animation end point
    threshold_offset = window.innerHeight*.41
    /*
    // Define fixed style for past the end point (prevent desync jiggling)
    if ( page_offset >= threshold_offset )
    {
        harry.classList.add('finaltitle')
        l_line.classList.add('fullline')
        r_line.classList.add('fullline')
        return
    }
    // Else: remove fixed styles and calculate postions
    harry.classList.remove('finaltitle')
    l_line.classList.remove('fullline')
    r_line.classList.remove('fullline')
    */
    // Change top position of 
    diff = Math.max(page_offset - threshold_offset, 0)
    harry.style.top = diff+'px'
    // Font size
    initial_size = 80
    target_size = .06*window.innerHeight
    progress = Math.min( page_offset, threshold_offset ) / threshold_offset
    harry.style.fontSize = (target_size*progress**2 + initial_size*(1-progress**2)) + 'px'
    // Closing lines
    delayed_offset = Math.max(page_offset - window.innerHeight*.05, 0)
    line_progress = Math.min( delayed_offset, threshold_offset ) / threshold_offset
    linewidth = line_progress**3*50
    l_line.style.width = linewidth+'vw'
    r_line.style.width = linewidth+'vw'
}
