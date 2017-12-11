enum GenreType {
    Web = "Web",
    App = "App",
    Game = "Game"
}
namespace GenreType {
   export function from(genreType: string): GenreType {
        switch (genreType) {
            case GenreType.Web:
                return GenreType.Web;
            case GenreType.App:
                return GenreType.App;
            case GenreType.Game:
                return GenreType.Game;
        }
        throw new Error("incrrect type: type");
    }
}
export default GenreType;

