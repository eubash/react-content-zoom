# build
build:
	webpack

# copy to relasee
copy:
	mkdir release/build
	cp -a develop/app/index.html release/build/
	cp -a run/build/ release/build/

# clean release build
cleanRelease:
	rm -r release/build

# clean run build
cleanRun:
	rm -r run/build

# ansible
# ansible:
#	ansible-playbook release/playbook_release.yaml

# publish
# publish: cleanRelease cleanRun build copy ansible

###################

# develop
develop:
	webpack-dev-server