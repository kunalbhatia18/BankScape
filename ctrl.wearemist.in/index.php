<?php
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest' && isset($_POST['text'])):
    $output = '';
    $filename = 'file.txt';
    if (!file_exists($filename)):
        $myfile = fopen($filename, "w");
    endif;
    file_put_contents($filename, $_POST['text']);   
    $output = array("File content created");
    die(json_encode($output));
else:
?>

<?php
for ($x = 0; $x <= 10; $x++):
?>
    <button class="ms-Button ms-Button--compoundPrimary mt-3 mx-auto rounded root-68" type="button" value="Clicked button <?php echo $x; ?>">A am button <?php echo $x; ?></button>
<?php
endfor;
?>

<script
src="https://code.jquery.com/jquery-3.3.1.min.js"
integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
crossorigin="anonymous"></script>     
<script>
$(document).on('click','.ms-Button',function(e) {
    var my_text = $(this).val();

    $.ajax({
        type: "POST",
        dataType:"json",
        url: window.location.href,
        data: "text=" + my_text,
        beforeSend: function (data) {
            alert('Sending');
        },
        success: function (data) 
        {
            alert('Success');

        },
        error: function (data) 
        {
            alert('Error');
        }
    });     
});
</script>
<?php endif; ?>