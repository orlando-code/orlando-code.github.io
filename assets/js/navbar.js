function generateSidebar() {
    return `
    <!-- Sidebar -->
    <section id="sidebar">
        <div class="inner">
            <nav>
                <ul>
                    <li><a href="#intro">Welcome</a></li>
                    <li><a href="#one">Biography</a></li>
                    <li><a href="#one">Newpage</a></li>

                    <!-- This will come later -->
                    <!-- <li><a href="#two">Blog</a></li> -->
                    <li><a href="#three">Get in touch</a></li>
                </ul>
            </nav>
        </div>
    </section>
    `;
}

// Call the function and insert the sidebar into a container element
document.getElementById('sidebar-container').innerHTML = generateSidebar();