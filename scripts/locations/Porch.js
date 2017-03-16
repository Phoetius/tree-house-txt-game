Porch = {
    info: "The Porch <br><br> A gentle breeze flows through the crack of the wood making it creak. Nearby are small storage containers, and a weaved chair",

    objects: [],

    enter: function() {
        print("You Walked to The Porch")
        this.install();

        for (var _ = 0; _ <= this.objects.length - 1; _++) {
            this.objects[_].enter.call(this.objects[_]);
        }
    },

    install: function() {
        //Main Div
        this.e_obj = document.createElement("div");
        c_main.appendChild(this.e_obj);

        //Info Div for e_obj
        this.e_info = document.createElement("div");
        this.e_info.setAttribute("class", "info");
        this.e_info.innerHTML = this.info;
        this.e_obj.appendChild(this.e_info);
    },

    update: function() {
        for (var _ = 0; _ <= this.objects.length - 1; _++) {
            if (this.objects[_].update) this.objects[_].update.call(this.objects[_]);
        }
    },
}