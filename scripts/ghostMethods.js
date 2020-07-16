function updateGhosts()
{
    if(Number.isInteger(score / 10) && ghostIterateCheck != score)
    {
        ghostIterateCheck = score;
        createNewGhost(768 * Math.random(), -10, 1);
    }
    ghosts.children.iterate(function (child) {
        child.body.allowGravity = false;
        if(player.y > child.y && child.body.velocity.y < 70)
        {
            child.body.velocity.y += (6 * Math.random());
        }
        if(player.y < child.y && child.body.velocity.y > -70)
        {
            child.body.velocity.y -= (6 * Math.random());
        }
        if(player.x > child.x && child.body.velocity.x < 80)
        {
            child.body.velocity.x += (7 * Math.random());
            child.anims.play('ghost_right', true);
        }
        if(player.x < child.x && child.body.velocity.x > -80)
        {
            child.body.velocity.x -= (7 * Math.random());
            child.anims.play('ghost_left', true);
        }
    }); 
}

function createNewGhost(x, y, count)
{
    for(i = 0; i < count; i++)
    {
        ghosts.create(x, y, 'ghost');
    }
}