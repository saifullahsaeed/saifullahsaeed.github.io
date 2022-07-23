(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
$(document).ready(function () {
    $(".theme-btn").click(function () {
        $("body").toggleClass("light-mode");
    }
    );
    $.getJSON("data/RxResume_JSONExport_FsM-pxr5YhuWW7F9cG7cQ.json", function (data) {
        $("#name-data").text(data.basics.name);
        $("#headline-data").text(data.basics.headline);
        $("#summery-data").text(data.basics.summary);
        $("#image-data").attr("src", data.basics.photo.url);
        $("#about-me").text(data.basics.about);
        $("#email-data").text(data.basics.email);
        $("#phone-data").text(data.basics.phone);
        $("#website-data").text(data.basics.website);
        $("#location-data").text(data.basics.location.city);
        $("#address-data").text(data.basics.location.address);
        $("#country-data").text(data.basics.location.country);
        $("#postal-code-data").text(data.basics.location.postalCode);
        $("#Total-projects").text(data.basics.NoOfProjects);
        $("#Total-reviews").text(data.basics.NoOfReviews);
        $("#Total-clients").text(data.basics.NoOfClients);
        $("#Total-experience").text(data.basics.yearsOfExperience);
        data.sections.skills.items.forEach(element => {
            $("#skills-list").append(
                `<div class="progress-bar">
                <p class="prog-title">${element.name}</p><span>${element.level}</span>
                <div class="progress-con">
                    <p class="prog-text">${element.levelNum}0%</p>
                    <div class="progress">
                        <span class="${element.name}" style="width:${element.levelNum}0%"></span>
                    </div>
                </div>
            </div>`
            );

        });
        data.sections.work.items.forEach(element => {
            var dateStart = element.date.start;
            var dateEnd = element.date.end;
            if (dateEnd == "") {
                dateEnd = "Present";
            }


            $("#timeline").append(
                `<div class="timeline-item">
                <div class="tl-icon">
                    <i class="fas fa-briefcase"></i>
                </div>
                <p class="tl-duration">${dateStart} - ${dateEnd}</p>
                <h5>Web Developer<span> -${element.name}</span></h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                </p>
            </div>`
            );
        }
        );
        data.sections.education.items.forEach(element => {
            var dateStart = element.date.start.substring(0, 7);
            var dateEnd = element.date.end.substring(0, 7);
            if (dateEnd == "") {
                dateEnd = "Present";
            }
            if (dateEnd == "") {
                dateEnd = "Present";
            }
            $("#timeline").append(
                `<div class="timeline-item">
                <div class="tl-icon">
                    <i class="fas fa-graduation-cap"></i>
                </div>
                <p class="tl-duration">${dateStart} - ${dateEnd}</p>
                <h5>${element.degree}<span> -${element.institution}</span></h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quasi vero fugit.
                </p>
            </div>`
            );
        }
        );
        data.sections.projects.items.forEach(element => {
            $("#projects").append(
                `<div class="portfolio-item">
                <div class="image">
                    <img src="img/port1.jpg" alt="">
                </div>
                <div class="hover-items">
                    <h3>${element.name}</h3>
                    <div class="icons" >
                        <a href="${element.urls[0].url}" class="icon">
                            <i class="fab fa-${element.urls[0].type.toLowerCase()}"></i>
                        </a>

                    </div>
                </div>
            </div>`
            );
        }
        );

        data.sections.languages.items.forEach(element => {
            $("#language-data").append(element.name + " : ");
        }
        );
        //send ip address to email 
        
    });
});
