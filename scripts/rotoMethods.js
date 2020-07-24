function updateRotos()
{
    if(Number.isInteger(score / 25) && rotoIterateCheck != score)
    {
        rotoIterateCheck = score;
        createNewRoto(384, -10, 1);
    }
    rotos.children.iterate(function (child) {
        child.body.allowGravity = false;

        //Determine if farther left or right
        var right = true;
        if(child.x > player.x)
        {
            //Player is left of the Roto
            right = false;
        }

        //Determine if player is farther above or below
        var under = true;
        if(child.y > player.y)
        {
            //Player is above the Roto
            under = false;
        }

        //Choose movement axis/direction
        if(under)
        {
            if(right)
            {
                //Decide whether to move down or right
                if((player.y - child.y) > (player.x - child.x))
                {
                    if(child.body.velocity.y < 50)
                    {
                        child.body.velocity.x = 0;
                        child.body.velocity.y += 10;
                    }
                }
                else
                {
                    if(child.body.velocity.x < 50)
                    {
                        child.body.velocity.y = 0;
                        child.body.velocity.x += 10;
                    }
                }
            }
            else
            {
                //Decide whether to move down or left
                if((player.y - child.y) > (child.x - player.x))
                {
                    if(child.body.velocity.y < 50)
                    {
                        child.body.velocity.x = 0;
                        child.body.velocity.y += 10;
                    }
                }
                else
                {
                    if(child.body.velocity.x > -50)
                    {
                        child.body.velocity.y = 0;
                        child.body.velocity.x -= 10;
                    }
                }
            }
        }
        else
        {
            if(right)
            {
                //Decide whether to move up or right
                if((child.y - player.y) > (player.x - child.x))
                {
                    if(child.body.velocity.y > -50)
                    {
                        child.body.velocity.x = 0;
                        child.body.velocity.y -= 10;
                    }
                }
                else
                {
                    if(child.body.velocity.x < 50)
                    {
                        child.body.velocity.y = 0;
                        child.body.velocity.x += 10;
                    }
                }
            }
            else
            {
                //Decide whether to move up or left
                if((child.y - player.y) > (child.x - player.x))
                {
                    if(child.body.velocity.y > -50)
                    {
                        child.body.velocity.x = 0;
                        child.body.velocity.y -= 10;
                    }
                }
                else
                {
                    if(child.body.velocity.x > -50)
                    {
                        child.body.velocity.y = 0;
                        child.body.velocity.x -= 10;
                    }
                }
            }
        }  
        child.anims.play('roto_move', true);
    });
}

function createNewRoto(x, y, count)
{
    for(i = 0; i < count; i++)
    {
        rotos.create(x, y, 'roto');
    }
}