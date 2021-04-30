function juploadstop(result) {
    console.log(typeof result);
    if (result == 0) {
        $(".imageholder").html("");
    } else if (result != 0) {
        $(".imageholder").html("<img src='" + result + "'>");
    }
}