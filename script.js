var model = {
	setCat: null,
	adminCat: null,
	cats: [
	  {
	  	count: 0,
	  	name: "Loha",
	  	Srcpic: "pic/Loha.jpg"
	  },
	  {
	  	count: 0,
	  	name: "Cara",
	  	Srcpic: "pic/Cara.jpg"
	  },
	  {
	  	count: 0,
	  	name: "Hana",
	  	Srcpic: "pic/Hana.jpg"
	  },
	  {
	  	count: 0,
	  	name: "Lalasa",
	  	Srcpic: "pic/Lalasa.jpg"
	  },
	  {
	  	count: 0,
	  	name: "Lega",
	  	Srcpic: "pic/Lega.jpg"
	  },
	  {
	  	count: 0,
	  	name: "Becka",
	  	Srcpic: "pic/Becka.jpg"
	  }
	]
}

var octopus = {
	//init function was call and run (second)
	init: function (){
		setCat = model.cats[0];
		listView.init();
		picView.init();
	},
	clickCat: function(setcat){
		setCat = setcat;
	},
	clickPic: function(){
		setCat.count++;
		picView.render(setCat);
	},
	catAdmin: function(){
		$(".inform").toggle("slow");
	},
	setByAdmin: function(){
		setCat.name = $("#cat-name").val();
		setCat.Srcpic = $("#cat-url").val();
		setCat.count = $("#cat-clicks").val();
		picView.render(setCat);
		listView.render();
		$(".inform input").text("");
	}

}

var listView = {
	init: function(){
		$("#save-cat").click(function(){
			octopus.setByAdmin();
		});
		//call next object
		listView.render();
	},
	render: function(){

		$("ul").html("");

		for (var x = 0; x < model.cats.length; x++){
			const Cat = model.cats[x];
			const catList = function(){return $("ul li").eq(x);}

			$("ul").append("<li> </li>");
			catList().text(Cat.name);

			catList().click(function(){
				octopus.clickCat(Cat);
				picView.render(Cat);
			});
        }
	}
}

var picView = {
	init: function(){
		//fullfill empty begin html element
		picView.render(setCat);

		$(".cat-pic img").click(function(){
			octopus.clickPic(setCat);
		});

		$("#add-cat").click(function(){
			octopus.catAdmin();
		});

	},
	render: function(cat){
		$('.cat-pic p').text(cat.count);
		$('.cat-pic h2').text(cat.name);
		$('.cat-pic img').attr("src", cat.Srcpic);
	}
}

//invoke init function(first)
octopus.init();
