#!/bin/sh
# Author: Yanyu
# Description:
#   a front-end build script for seajs based project, use nodejs enviroment and grunt tool to
#   transport cmd modules, concat, minify, uglify js/tpl/css... resources.
# Date: 2016/03/02
#
echo "======> run FE's build procedure start <======"
source /etc/profile
startTime=`date "+%s"`
npm config set registry http://172.16.116.19:7001/
chmod -R 777 ./

yarn install
yarn build

endTime=`date "+%s"`
cost=$[$endTime-$startTime]
echo " ------------------------------------------------------------------------"
echo "  FE's BUILD SUCCESS"
echo " ------------------------------------------------------------------------"
echo "  Total time: ${cost}s"
echo "  Finished at: `date '+%Y-%m-%d %H:%M:%S'`"
echo " ------------------------------------------------------------------------"
echo "======> run FE's build procedure end <======"