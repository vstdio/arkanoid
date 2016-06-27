function GameInterface()
{
    this.areaForName = $('#areaForName');
    this.startButton = $('#startButton');
    this.showTopButton = $('#showTopButton');
    this.hideTopButton = $('#hideButton');
    this.renameButton = $('#renameButton');
    this.gameOverMessage = $('#gameOverMessage');
    this.endScoreMessage = $('#endScoreMessage');
    this.topPlayersBlock = $('#windowPopup');
    this.allElements = $('#pageElements');
    this.backgroundImage = $('#canvasContainer');
}

GameInterface.prototype.hideAllOnStart = function()
{
    this.allElements.hide();
};

GameInterface.prototype.showAllOnEnd = function()
{
    this.allElements.show();

    this.renameButton.show();
    this.areaForName.hide();

    this.startButton.val('Play again');
};

GameInterface.prototype.processOnRename = function()
{
    this.renameButton.hide();
    this.gameOverMessage.hide();
    this.endScoreMessage.hide();

    this.areaForName.show();

    this.startButton.val('Play')
    this.areaForName.val('');
};

GameInterface.prototype.showGameOver = function(name, score)
{
    this.gameOverMessage.html('Game Over, ' + name + '!');
    this.endScoreMessage.html('Score: ' + score);
    this.gameOverMessage.show();
    this.endScoreMessage.show();
};

GameInterface.prototype.hideOnload = function()
{
    this.renameButton.hide();
};

GameInterface.prototype.popUpShow = function()
{
    this.topPlayersBlock.show();
};

GameInterface.prototype.popUpHide = function()
{
    this.topPlayersBlock.hide();
};

GameInterface.prototype.getPlayerName = function()
{
    return this.areaForName.val();
};