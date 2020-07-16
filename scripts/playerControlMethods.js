function playerCaught()
{
    ghostCol.active = false;
    takePlayerControl(this);
    ghosts.children.iterate(function (child) {
        child.anims.play('ghost_victory', false);
        child.once('animationcomplete', ()=>{ 
            try
            {
                child.anims.play('ghost_vanish', false);
                child.once('animationcomplete', ()=>{ 
                    child.destroy();
                });
            }
            catch
            {
                child.destroy();
            }
        });
    });
    gameover = true;
}

function takePlayerControl(game)
{
        platformColOne.active = false;
        platformColTwo.active = false;
        platformColThree.active = false;
        platformColFour.active = false;
        player.setCollideWorldBounds(false);
        game.cameras.main.stopFollow(player);
}

function givePlayerControl(game)
{
        platformColOne.active = true;
        platformColTwo.active = true;
        platformColThree.active = true;
        platformColFour.active = true;
        player.setCollideWorldBounds(true);
        game.cameras.main.startFollow(player);
}