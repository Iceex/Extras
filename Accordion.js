    <style>
        .accordion {
            text-align: left;
            cursor: pointer;
            width: 100%;
            transition: max-height 1s ease;
            border: none;
            background: none;
            outline: none;
            font-size: 17px;
        }

        .panel {
            max-height: 0;
            overflow: hidden;
            transition: max-height 1s ease;
            background-color: #f4f4f4; 
            font-size: 18px; 
            line-height: 1.5; 
            color: #333; 
        }

        .panel-content {
            padding: 20px; /* Agregamos padding al contenido del panel */
        }

        .panel-content ul {
            margin: 30px; /* Agregamos padding alrededor de la lista */
        }
        .accordion.active, .accordion:hover {
            background-color: #fff;
        }

        .icon::before {
		    color: #81c0cc;
            content: '\25BC';
            font-size: 20px;
            float: right;
        }

        .active .icon::before {
            content: '\25B2';
        }
    </style>

<button123 class="accordion"><span class="icon"></span><b>Your First Physician Appointment: Comprehensive Health Assessment</b></button123>
<div class="panel">
    <div class="panel-content">
   <ul>
  <p><li>A detailed review of your current symptoms, medical history, lifestyle habits, and medications or supplements.</li></p>
  <p><li>A physical exam, which may include blood pressure and cholesterol checks, height and weight measurements, and a listening to your heart and lungs.</li></p>
  <p><li>Any necessary tests, such as blood work, urine tests, or imaging tests.</li></p>
</ul>
<p>This appointment is an opportunity for you to get to know your doctor and for them to get to know you. It's important to be honest and open about your health, so that your doctor can provide you with the best possible care.</p>
    </div>
</div>

<script>
    // JavaScript para manejar el acordeón
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
</script>