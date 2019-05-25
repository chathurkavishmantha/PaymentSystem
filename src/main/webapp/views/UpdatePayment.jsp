<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="ISO-8859-1">
    <title>Login</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

</head>
<body>



<div class="container">
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">
                Update Payment
            </h2>
        </div>

        <div class="card-body">

            <form action="" method="post">
                <div class="form-group">
                    <input type="text" class="form-control" name="Payment_Date" id="Payment_Date">
                </div>

                <div class="form-group">
                    <input type="text" class="form-control" name="Payment_Customer_Details" id="Payment_Customer_Details">
                </div>

                <div class="form-group">
                    <textare class="form-control" name="Payment_Seller_Details" id="Payment_Seller_Details"></textare>
                </div>

                <div class="form-group">
                    <button class="btn btn-success btn-sm" type="submit">Update Payment</button>
                </div>

            </form>
        </div>
    </div>
</div>

</body>
</html>