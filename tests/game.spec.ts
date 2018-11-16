import { defaultUserRole } from "./roles";
import { welcomePageStartGameButton, gamePageCards } from "./game.selectors";

fixture('game tests').page('http://localhost:4200/');

test('should start a new game and flip the top-left card, and it should stay flipped', async (controller) => {
    await controller
        .useRole(defaultUserRole)
        .click(welcomePageStartGameButton)
        .click(gamePageCards.nth(0))
        .expect(gamePageCards.nth(0).find('i').classNames).contains('flipped');
});