# surferdude1972.github.io
WebSite development Jeroen

# Prerequisites Windows 10 for running Docker on Windows Subsystem for Linux(WSL)
Running Docker with terraform on Windows 10 needs some prerequisites. Use this guide to setup your Windows 10 system. 

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
What things you need to install the software and how to install them
```
1. Open PowerShell as Administrator and run:
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux

2. Restart your computer when prompted.
```

### Install
## Downloading distro using Powershell
To download distros using PowerShell, use the Invoke-WebRequest cmdlet. Here's a sample instruction to download Ubuntu 16.04.
```
Invoke-WebRequest -Uri https://aka.ms/wsl-ubuntu-1604 -OutFile Ubuntu.appx -UseBasicParsing
```
## Download using curl
Windows 10 Spring 2018 Update (or later) includes the popular curl command-line utility with which you can invoke web requests (i.e. HTTP GET, POST, PUT, etc. commands) from the command line. You can use curl.exe to download the above distros:
```
curl.exe -L -o ubuntu-1604.appx https://aka.ms/wsl-ubuntu-1604
```

## Installing the distro
Now that you've downloaded a distro, extract its contents and manually install the distro:
Extract the <distro>.appx package's contents, e.g. using PowerShell:
```
Rename-Item ~/Ubuntu.appx ~/Ubuntu.zip
Expand-Archive ~/Ubuntu.zip ~/Ubuntu
```
Run the distro launcher To complete installation, run the distro launcher application in the target folder, named <distro>.exe. For example: ubuntu.exe, etc.

Add your distro path to the Windows environment PATH (C:\Users\Administrator\Ubuntu in this example), e.g. using Powershell:
$userenv = [System.Environment]::GetEnvironmentVariable("Path", "User")
[System.Environment]::SetEnvironmentVariable("PATH", $userenv + "C:\Users\Administrator\Ubuntu", "User")

### Setting up a new Linux user account
Once installation is complete, you will be prompted to create a new user account (and its password).

```
This user account is for the normal non-admin user that you'll be logged-in as by default when launching a distro.
You can choose any username and password you wish - they have no bearing on your Windows username.
When you open a new distro instance, you won't be prompted for your password, but if you elevate a process using sudo, you will need to enter your password, so make sure you choose a password you can easily remember! See the User Support page for more info.
```

### With a couple of tweaks the WSL (Windows Subsystem for Linux, also known as Bash for Windows) can be used with Docker for Windows.
Docker for Windows has been recently renamed to Docker Desktop
https://hub.docker.com/editions/community/docker-ce-desktop-windows
Download and install Docker Desktop.
```
In the general settings, you’ll want to expose the daemon without TLS.
```

## Install Docker in WSL
You can copy / paste all of the commands below into your WSL terminal.

## Built With
# Update the apt package list.
sudo apt-get update -y

# Install Docker's package dependencies.
sudo apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common

# Download and add Docker's official public PGP key.
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# Verify the fingerprint.
sudo apt-key fingerprint 0EBFCD88

# Add the `stable` channel's Docker upstream repository.
#
# If you want to live on the edge, you can change "stable" below to "test" or
# "nightly". I highly recommend sticking with stable!
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

# Update the apt package list (for the new apt repo).
sudo apt-get update -y

# Install the latest version of Docker CE.
sudo apt-get install -y docker-ce

# Allow your user to access the Docker CLI without needing root access.
sudo usermod -aG docker $USER

## Make sure $HOME/.local/bin is set on your WSL $PATH
If it’s not there, you’ll want to add it to your $PATH. You can do that by opening up your profile file with nano ~/.profile. Then anywhere in the file, on a new line, add export PATH="$PATH:$HOME/.local/bin" and save the file.

Finally, run source ~/.profile to active your new $PATH and confirm it works by running echo $PATH. You should see it there now. Done!

## Verify Everything Works

# You should get a bunch of output about your Docker daemon.
# If you get a permission denied error, close + open your terminal and try again.
docker info

# You should get back your Docker Compose version.
docker-compose --version

# Ensure Volume mount work
When using WSL, Docker for Windows expects you to supply your volume paths in a format that matches this: /c/Users/nick/dev/myapp.
But, WSL doesn’t work like that. Instead, it uses the /mnt/c/Users/nick/dev/myapp format. 

## Running Windows 10 18.03+ or Newer?
First up, open a WSL terminal because we need to run a few commands.

# Create and modify the new WSL configuration file:
sudo nano /etc/wsl.conf

# Now make it look like this and save the file when you're done:
[automount]
root = /
options = "metadata"
We need to set root = / because this will make your drives mounted at /c or /e instead of /mnt/c or /mnt/e.

The options = "metadata" line is not necessary but it will fix folder and file permissions on WSL mounts so everything isn’t 777 all the time within the WSL mounts. I highly recommend you do this!

Once you make those changes, sign out and sign back in to Windows to ensure the changes take effect. Win + L isn’t enough. You’ll need to do a full blown sign out / sign in.

## Contributing
..

## Versioning
..

## Authors

* **Nick Janetakis** - *Initial work* - (https://nickjanetakis.com/blog/setting-up-docker-for-windows-and-wsl-to-work-flawlessly)
* Microsoft - (https://docs.microsoft.com/en-us/windows/wsl/install-on-server)
