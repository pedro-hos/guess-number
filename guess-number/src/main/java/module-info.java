module io.pedrohos.guess.number {
    requires javafx.controls;
    requires javafx.fxml;
	requires javafx.media;

    opens io.pedrohos.guess.number to javafx.fxml;
    exports io.pedrohos.guess.number;
}
