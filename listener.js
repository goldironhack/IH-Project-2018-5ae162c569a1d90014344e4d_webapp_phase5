

(function () {
    
    document.getElementById("pills-saf-tab").addEventListener("click", function () {
            drawDistrSafe();        
    });
    document.getElementById("pills-aff-tab").addEventListener("click", function () {
            drawDistrAff();        
    });
    document.getElementById("pills-dis-tab").addEventListener("click", function () {
        drawDistrDist();
    });
    document.getElementById("pills-ent-tab").addEventListener("click", function () {
        drawDistrEn();
    });
    document.getElementById("dwdis").addEventListener("click", function () {
        toCSV(nDistricts);
    });
    document.getElementById("dwaff").addEventListener("click", function () {
        toCSV(affPerDistricts);
    });
    document.getElementById("dwsaf").addEventListener("click", function () {
        toCSV(crimesPerDistricts);
    });
    document.getElementById("dwent").addEventListener("click", function () {
        toCSV(galleriesPerDistricts);
    });
})();