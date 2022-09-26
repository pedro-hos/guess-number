module io.pedrohos.guess.number {
    requires javafx.controls;
    requires javafx.fxml;

    opens io.pedrohos.guess.number to javafx.fxml;
    exports io.pedrohos.guess.number;
}
