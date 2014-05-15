from fabric.api import (
    local,
    execute,
    env,
    sudo,
)

import os

env.use_ssh_config = True
env.hosts = ['pg-misc-0']


def compress():
    local("sass --update -t compressed css/main.sass:css/main.min.css")
    local("uglifyjs js/plugins.js > js/plugins.min.js")
    local("uglifyjs js/main.js > js/main.min.js")


def deploy():
    execute(compress)
    pwd = os.getcwd()
    sudo("chown {} -R /srv/www/jobs.ele.me/".format(env.user))
    local('rsync -az --exclude-from=rsync_exclude.conf --progress '
          '{}/ pg-misc-0:/srv/www/jobs.ele.me/'.format(pwd))
    sudo("chown www-data -R /srv/www/jobs.ele.me/")
