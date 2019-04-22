feather.replace();

$("#state").on('change', function(event){
    let state = event.target.value;
    let cities;

    $.ajax({
        type: "POST",
        data: {state:state},
        url: "/getcity",
        success: function(data){
            $("#cities").empty();
            $("#cities").append(`
                    <option onclick="return false">Select City</option>
                `);
            for(let k in data) {
                $("#cities").append(`
                    <option value="`+ data[k] +`">`+ data[k] + `</option>
                `);
            }

        }
    });

});

$("#cities").on('change', function(event){
    let city = event.target.value;

    let getFormattedData = function (data) {
        let result = {
            children: []
        }

        let valid_categories = ["American (New)", "American (Traditional)", "Asian Fusion", "Barbeque", "Bars", "Breakfast & Brunch", "Burgers", "Cafes", "Chicken Wings", "Chinese", "Fast Food", "Indian", "Italian", "Japanese", "Korean", "Mexican", "Pizza", "Sandwiches", "Thai"];

        for (let category in data) {

            let temp = {"Name": category, "Count": data[category]};
            result.children.push(temp);
        }

        result.children = result.children.filter( function(e) {
            return valid_categories.indexOf(e.Name) > -1;
        });

        return result;
    }

    $.ajax({
        type: "POST",
        data: {city:city},
        url: "/get_bubble_data",
        success: function(data){
            let categoryMap = {};
            for (let i = 0; i < data.length; i++) {
                let restCategoryList = data[i].categories.split(",");
                for (let j = 0; j < restCategoryList.length; j++) {
                    let categoryName = restCategoryList[j].trim().replace("\"",'');
                    categoryMap[categoryName] = (categoryMap[categoryName] == undefined ? 1 : categoryMap[categoryName] + 1);
                }
            }

            window.drawBubble(getFormattedData(categoryMap));
        }
    });






})