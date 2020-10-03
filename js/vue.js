// Vue.component('home', {
    // data: function () {
    //   return {
    //     title: 'Learning while being able to help contribute or be a part of an awesome project would be fun. I am constantly learning and passionate at programming.',
    //   }
    // },
    // template: `
    // <div class="home">
    //     <div>
    //         <h1>Hi! I'm Aaron!</h1>
    //     </div>
    //     <div>
    //         <h4>Just call me aron.</h4>
    //     </div>
    //     <div>
    //         <p class='justify indent' v-text="title"></p>
    //     </div>
    // </div>
    // `
// });



// new Vue({
//     el: '#app',
//     data: {
//         page: 0
//     },
//     methods: {
//         loadThis(id) {
//             document.getElementById("here").innerHTML = "";
//             document.getElementById("here").innerHTML = `<${id}></${id}>`;
//         }
//     }
// })



const Home = { 
    data: function () {
        return {
          title: 'Hi! I Hope you are well and are doing fine during this pandemic. I declare breakthrough and blessings upon blessings to you and your family.',
        }
      },
      template: `
      <div class="home">
          <div>
              <h1>Hi! I'm Aaron!</h1>
          </div>
          <div>
              <h4>Just call me aron.</h4>
          </div>
          <div>
              <p class='justify indent' v-text="title"></p>
          </div>
      </div>
      `
 }
const About = { 
    data: function () {
        return {
            cd: {
                title: "Contact Details",
                name: "Aaron Bill Domingo",
                location: "Philippines",
                cp: "+63 961 139 6893",
                email: "domingoaaronbill@gmail.com"
            },
            social: {
                github: "https://github.com/Aabill",
                fb: "https://fb.com/aabill.domingo",
                ig: "https://instagram.com/aabb.domingo",
                t: "https://twitter.com/R_on_Bill"
            },
            about: {
                note: "Programming is <3. When I'm not coding, I like to play guitar or sing, play basketball, or produce some music.",
                resume: "Download Resume",
                certs : "View Certificates"
            }
        }
    },
    template: `
    <div class="about">
        <div class="about-image"></div>
        <div class="about-contact">
            <div>
                <h3>
                <i class="fa fa-phone" aria-hidden="true"></i> 
                {{ cd.title }}
                </h3>
                <p>{{ cd.name }}</p>
                <p> <i class="fa fa-location-arrow" aria-hidden="true" ></i> {{ cd.location }}</p>
                <p><i class="fa fa-mobile" aria-hidden="true"></i>{{ cd.cp }}</p>
                <p > {{ cd.email }}</p>
            </div>

            <div class="about-contact-social">
                <span><a v-bind:href="social.github" target="_blank"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a></span>
                <span><a v-bind:href="social.fb" target="_blank"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a></span>
                <span><a v-bind:href="social.ig" target="_blank"><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></a></span>
                <span><a v-bind:href="social.t" target="_blank"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a></span>
            </div>
        </div>
        <div class='about-note'>
            <p class="justify indent">{{about.note}}</p>
        </div>
        <div class="about-resume">
            <div>
            <a href="files/Aaron's Resume.pdf" download> 
                {{about.resume}}</a>
            </div>
            <div>
            <a href="files/certs&semspdf.pdf" target="__blank">{{about.certs}}</a>
            </div>
        </div>
        <br>
    </div>`
}
const Skills = { 
    data: function () {
        return {
            note: {
                first: `I am currently freelancing projects using html, scss - doing some psd to html pages and using a php template engine called twig and some integrations (api).`,
                second: `Within my four months working as a Junior PHP Developer at,`,
                third: `I have learned how to interact and work as a team in developing a website's requirements. I learned how to work with tools like basecamp, jira, bitbucket and agile development with git version control. I had my knowledge extended in JavaScript and Jquery - Ajax in particular and learned how to develop with PHP Framework - Codeigniter.`
            }
        }
    },
    template: `
    <div class="skills">
            <div class="skills-top-left">
                <h3>Programming</h3>
                <div>
                php
                    <div class="progress-bar">
                        <span class="php-bar"></span>
                    </div>
                </div>
                <div>
                javascript
                    <div class="progress-bar">
                        <span class="js-bar"></span>
                    </div>
                </div>
                <div>
                html & css
                    <div class="progress-bar">
                        <span class="html-bar"></span>
                    </div>
                </div>
                <div>
                c# / arduino
                    <div class="progress-bar">
                        <span class="c-bar"></span>
                    </div>
                </div>
               
            </div>
            <div class='skills-top-right'>
                <h3>Frameworks & Toolkits</h3>
                <div>
                laravel
                    <div class="progress-bar">
                        <span class="laravel-bar"></span>
                    </div>
                </div>
                <div>
                jquery
                    <div class="progress-bar">
                        <span class="jquery-bar"></span>
                    </div>
                </div>
                <div>
                bootstrap
                    <div class="progress-bar">
                        <span class="bootstrap-bar"></span>
                    </div>
                </div>
                <div>
                vue
                    <div class="progress-bar">
                        <span class="vue-bar"></span>
                    </div>
                </div>
                <div>
                codeigniter
                    <div class="progress-bar">
                        <span class="codeigniter-bar"></span>
                    </div>
                </div>
                
            </div>
            <div class='skills-bot-left'>
                <h3>Database</h3>
                <div>
                mysql
                    <div class="progress-bar">
                        <span class="mysql-bar"></span>
                    </div>
                </div>
            </div>
            <div class='skills-bot-right'>
                <h3>Version Control</h3>
                <div>
                    git
                    <div class="progress-bar">
                        <span class="git-bar"></span>
                    </div>
                </div>
                <div>
                    bitbucket
                    <div class="progress-bar">
                        <span class="bitbucket-bar"></span>
                    </div>
                </div>
            </div>
            <div class='skills-note'>
                <p class="justify indent">
                    {{note.first}}
                </p>
                <p class="justify indent">
                    {{note.second}}
                    <a href="https://tzilla.com" target="_blank"> tzilla.com</a>
                    {{note.third}}
                </p>
                <br>
            </div>
        </div>
    ` 
}
const Projects = { 
    data: function () {
        return {
            thesis: {
                one: "Basically, its a system for storing data and then generating its table as xls file.",
                two: "The system consists an android application for storing, editing, deleting data offline and uploading data to its web-app where all the uploaded files are tabulated and monitored for generating an xls file."
            }  
        }
    },
    template: `
    <div class='projects'>
    <div>
        <h3>Covid 19</h3>
        <h4>Updates about Covid 19</h4>
        <div style="font-size: 15px;">
            <p>Data is from NovelCOVID API (github.com/NovelCOVID/API)</p>
            <p><a href="https://covid19-yords.ml" target="_blank">covid19-yords.ml</a></a></p>
        </div>
    </div>
    <div>
        <h3>Thesis Project</h3>
        <h4>*Title: Mobile and Web-based Individual Health Profiling System</h4>
        <div style="font-size: 15px;">
            <p>{{thesis.one}}</p>
            <p>{{thesis.two}}</p>
        </div>
    </div>
    <div>
        <h3>Laravel Portfolio</h3>
        <h4>*With Send Mail and Telegram</h4>
        <div style="font-size: 15px;">
            <p >Its a practice portfolio of mine built in laravel, with an smtp.gmail.io and telegram messaging bot.</p>

            <p>Source <a href="https://github.com/Aabill/portfolio" target="_blank">code</a>.</p>
            <p>
            Deployed at Heroku <a href="https://aaron-laravel-portfolio.herokuapp.com/" target="_blank">https://aaron-laravel-portfolio.herokuapp.com</a>.
            </p>
            
        </div>
    </div>
    <div>
        <h3>Sample Codes</h3>
        <h4>*Something Random.</h4>
        <div style="font-size: 15px">
            <ul>
                <li><p>Make Everything OK. Sample <a href="https://github.com/Aabill/Make-Everything-OK" target="_blank"> code</a> or check it out <a href="https://aabill.github.io/Make-Everything-OK" target="_blank"> here</a> XD.</p></li>

                <li><p>Rotating Boxes. Sample <a href="https://github.com/Aabill/Rotating-Boxes" target="_blank"> code</a> or check it out <a href="https://aabill.github.io/Rotating-Boxes" target="_blank"> here</a> XD.</p></li>
            </ul>
        </div>
        
    </div>
    <br>
    </div>
    ` 
}

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/skills', component: Skills },
  { path: '/some-fun', component: Projects }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for `routes: routes`
//   mode: 'history'
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  router
}).$mount('#app')