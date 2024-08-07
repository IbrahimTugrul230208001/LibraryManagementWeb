﻿$(document).ready(function () {
    $("#loginButton").click(function (event) {
        event.preventDefault();

        var user = {
            UserName: $("#tbxUserName").val(),
            Password: $("#tbxPassword").val()
        };

        $.ajax({
            type: "POST",
            url: "/LogIn/UserLogIn",
            data: JSON.stringify(user),
            dataType: "json",
            contentType: "application/json",
            success: function (response) {
                if (response.success) {
                    toastr.success('Giriş yapılıyor...');
                    window.location.href = response.redirectUrl;
                } else {
                    alert("Giriş yapılamadı.");
                }
            },
            error: function (xhr, status, error) {
                console.log("Error details:", xhr, status, error);
                alert("Sunucu ile iletişim kurulurken bir hata oluştu.");
            }
        });
    });
});