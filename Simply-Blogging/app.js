let adminLogged = false;

// Admin Login using  ReqRes.in fake API
// email: eve.holt@reqres.in
// password: *just type anything*
function login() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://reqres.in/api/login', true);
    xhr.setRequestHeader('Content-type', 'application/json');

    xhr.onload = function () {
        if (xhr.status === 400) {
            let response = xhr.responseText.slice(10, -2);

            let error = document.getElementById('errorMessage').innerHTML = response;
        } else {
            document.getElementById('logoutBtn').style.display = "block";
            document.getElementById('loggedInModal').style.display = "block";
            document.getElementById('avatar').style.display = "block";
            document.getElementById('loginForm').style.display = "none";
            document.querySelector('.modal-footer').style.display = "none";
            document.getElementById('loginBtn').style.display = "none";
            adminLogged = true;
        }
    };
    const data = {};
    data.email = document.getElementById('email').value;
    data.password = document.getElementById('password').value;
    let json = JSON.stringify(data);
    xhr.send(json);
}

class Blog {
    constructor(title, img, description, article) {
        this.title = title;
        this.img = img;
        this.description = description;
        this.article = article;
    }
}

const blogs = [];
let blog1 = new Blog(
    "Lorem ipsum",
    "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, eligendi ratione.",
    "sdghsdhsd"
);

let blog2 = new Blog(
    "Lorem ipsum",
    "https://images.unsplash.com/photo-1554474051-0256b98c36f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, eligendi ratione.",
    "sdghsdhsd"
);

let blog3 = new Blog(
    "Lorem ipsum",
    "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, eligendi ratione.",
    "sdghsdhsd"
);
blogs.push(blog1, blog2, blog3, blog3, blog1, blog2);

let blogsSection = "";

function showBlogs() {
    for (let i = 0; i < blogs.length; i++) {
        blogsSection +=
            ' <div class="col-lg-4 col-md-6 mb-4">\n' +
            '       <div class="card">\n' +
            '            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">\n' +
            '            <img src=" ' + blogs[i].img + '" class="img-fluid"/>\n' +
            '            <a href="#!">\n' +
            '              <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>\n' +
            '          </a>\n' +
            '          </div>\n' +
            '           <div class="card-body">\n' +
            '            <h5 class="card-title">' + blogs[i].title + '</h5>\n' +
            '            <p class="card-text">' + blogs[i].description + '</p>\n' +
            '  <a href="#!" class="btn btn-secondary">Read</a>\n' +
            '  </div>\n' +
            '   </div>\n' +
            '    </div>';
    }
    document.getElementById('blogs').innerHTML = blogsSection;
}