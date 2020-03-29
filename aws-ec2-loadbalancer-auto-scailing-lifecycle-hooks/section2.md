# Section2. What makes up an EC2 Instance

### Lecture6. What makes up an EC2 Instance

EC2 인스턴스 생성하기
* 원하는 리전을 선택하고 EC2 서비스에 접속한다
* 그 다음 왼쪽 리스트에서 인스턴스 메뉴에 있는 Instance를 클릭한다
* 왼쪽 상단에 Launch Instance버튼을 누르면 EC2 인스턴스를 생성하기 위한 옵션을 지정하는 페이지가 나온다
* 여기서는 아주 간략하게 어떤 옵션들이 있는지만 설명하고 차후에 디테일하게 알아볼 것이다

AMI(Amazon Machine Image)선택하기
* AMI는 EC2에 설치할 운영체제를 지정하는 옵션이다
* 원하는 운영체제를 찾아 Select버튼을 누른다

Instance Type 고르기
* Instance type은 EC2인스턴스의 사이즈를 지정하는 옵션이다

Configure Instance
* 네트워크 서브넷, 퍼블릭 IP, Placement Group, IAM Role, Monitoring 등 지정해야 하는 수 많은 옵션이 있을것이다

Add Storage
* 볼륨을 추가하거나 루트 볼륨을 수정할 수 있다

Add Tags
* 태그는 EC2 인스턴스를 쉽게 알아볼 수 있게 하기 위해서 이름을 붙인 것이다

Configure Security Group
* 방화벽 설정 등을 통해 EC2인스턴스에 접근하는 트래픽을 관리하는 설정이다
* Review and Launch 버튼을 누르면 지금까지 선택한 모든 옵션을 한 화면에서 확인할 수 있게 된다

---

### Lecture 7. Amazon Machine Image

AMI(Amazon Machine Image)란
* AMI는 운영체제나 애플리케이션 같은 소프트웨어 설정을 포함한 템플릿이다

AMI 설정하기
* EC2에서 처음 Launch Instance를 누르면 미리정의된 AMI 목록이 나타난다
* 모든 AMI는 ami-052652af12b58691f(Amazon Linux2의 예)와 같은 ID값을 가지고 있다

My AMIs
* 스스로 만든 AMI 목록을 볼 수 있다

AWS Marketplace
* third party AMI 목록을 볼 수 있다

Community AMIs
* 커뮤니티의 개발자들에 의해 만들어진 AMI목록을 볼 수 있다

---

### Lecture 8. Instance Family, Class and Size

Instance Type
* AMI 설정이 끝나면 Instance Type 설정 페이지가 나온다
* Instance Type은 사용자의 요구에 맞춰 여러 인스턴스로 나뉘어져 있다

인스턴스 타입들의 차이점
* CPU, memory, storage, and networking capacity의 성능에 따라 나뉜다
* 더 높은 성능의 인스턴스 타입을 선택할수록 비용도 증가한다
* https://aws.amazon.com/ec2/instance-types/ 
* 위 링크를 통해 보다 자세한 차이점을 확인할 수 있다
* General Purpose, Compute Optimized, Memory Optimized, Accelerated Computing, Storage Optimized 중에서 목적에 맞게 사용하면된다

General Purpose
* 균형잡힌 compute, memory, networking을 제공해주는 인스턴스 타입이다
* 일반적인 웹 서버 용도로 쓰기에 적합한 인스턴스 타입이다

Compute Optimized
* 더 강력한 CPU 성능을 가진 인스턴스 타입이다
* 배치 작업, 로그, 게임 서버 등에 적합한 인스턴스 타입이다

Memory Optimized
* 더 많은 메모리를 가진 인스턴스 타입이다

Accelerated Computing
* 하드웨어 가속에 적합한 인스턴스 타입이다
* 그래픽 작업, 정확한 숫자 계산 등 하드웨어적인 능력이 필요한 작업에 적합한 인스턴스 타입이다

Storage Optimized
* 효율적인 Read, Write 작업이 많은 경우 적합한 인스턴스 타입이다
* 데이터베이스가 대표적인 경우다
* NoSQL, Elastic search 등에 자주 사용된다

---

### Lecture 9. VPC and Subnet

VPC와 Subnet
* 인스턴스 타입 설정을 끝내고 나면 네트워크 등 여러 설정을 할 수 있는 화면(Configure Instance)이 나온다
* 이 화면에서 EC2인스턴스가 어떤 네트워크와 서브넷에 속할지를 지정한다
* 여기서 네트워크는 VPC라고 불린다

VPC(Virtual Private Cloud)란
* VPC란 AWS 계정에 따라 논리적으로 격리된 네트워크 환경을 말한다
* AWS를 이용하는 다른 계정의 환경과 격리시키기 위해 사용한다
* 다른 환경과 격리를 위해 리전 단위로 특정한 IP 주소의 범위를 가진다
* AWS의 리전은 2개 이상의 Availability zone을 가진다
  - 따라서 VPC는 AZ와도 맵핑된다
  - 예를 들어, Ohio 리전은 3개의 AZ을 가지고 있다
  - 이 각각의 AZ에는 Subnet이 할당된다

Subnet이란
* Subnet은 VPC의 IP 주소 범위를 나타낸다
* Subnet또한 IP주소를 가진다는 이 부분이 자주 헷갈리는 부분이다
* Subnet은 VPC처럼 IP 주소의 범위를 가지지만 동시에 VPC에 소속되어 있다
* 따라서 VPC IP range(범위)는 보다 넓은 범위를 가지고 있고, Subnet은 거기에 속한 IP range를 가진다

VPC IP와 Subnet IP
* 네트워크에 대해서 잘 모르는 경우 Subnet mask값이 더 큰것을 보고 Subnet IP의 범위가 보다 넓은 것이 아닌지 착각하는 경우가 있다
* 예를 들어, 현재 내 계정의 Tokyo 리전의 VPC IP는 172.31.0.0/16이다
* Tokyo 리전에는 3개의 AZ가 있는데 각각의 IP는 다음과 같다
  - ap-northeast-1a : 172.31.32.0/20
  - ap-northeast-1c : 172.31.0.0/20
  - ap-northeast-1d : 172.31.16.0/20
* Subnet mask가 20이므로 더 넓은 범위를 가지고 있는 것이 아니냐고 생각할 수 있다
* 그러나 네트워크에서는 mask가 더 작은 숫자가 더 넓은 범위를 가진다

Default VPC
* Default VPC는 해당 리전의 AZ의 숫자만큼의 서브넷을 기본으로 가진다
* 그런데 Default VPC와 별개로 직접 만든 VPC에는 반드시 AZ숫자만큼의 서브넷을 할당할 필요는 없다
  - 예를 들어 Oregon의 AZ는 4개이므로 Default VPC에 속한 Subnet은 4개여야 하지만
  - 직접 생성한 VPC에는 2개의 Subnet만 있어도 상관없다

Subnet을 사용하는 방식
* Oregon 리전에 VPC를 생성하고 2개의 Subnet을 할당했다고 가정해보자
* 이렇게 생성한 네트워크를 이용해 쇼핑몰을 만든다면 
* 첫번째 Subnet에는 웹서버를 생성하고 외부 트래픽을 받을 수 있게 설정한 다음
* 두번째 Subnet에는 데이터베이스를 설치하고 외부로부터의 트래픽을 차단한 뒤 웹서버로부터의 Persistence 요청만을 받도록 설정할 수 있다

---

### Lecture 10. EBS Volumes and Root Device Volume

Storage Volume
* Storage Volume은 데스크톱의 하드디스크와 같다고 생각하면 된다
* EC2 인스턴스는 운영체제를 설치하기 위해 Storage Volume을 필요로 한다
* Storage Volume은 EBS Volume으로도 알려져 있다

EBS(Elastic Block Store) Volume
* Raw하고 형식이 없는 저장소에 가깝다
* 기본적으로 파일 시스템도 없다
* EC2 인스턴스는 여러 개의 Volume을 가질 수 있지만 EBS Volume은 오직 하나의 EC2 인스턴스에만 할당된다
  - 데스크톱은 여러 개의 하드디스크를 가질 수 있지만
  - 하드디스크는 하나의 데스크톱에만 사용할 수 있는 것과 같다
* 주의할점은 EBS Volume과 EC2 인스턴스는 반드시 같은 AZ에 있어야만 한다는 것이다
* EBS Volume은 인스턴스가 없어져도 독립적으로 존재할 수 있다
  - 만약 한 EBS Volume이 EC2 인스턴스에 속해있다가 EC2 인스턴스가 삭제되어도 EBS Volume은 남는다
* Volume type은 EBS의 목적을 지정하는 옵션이다
* IOPS는 초당 IO의 성능을 지정하는 옵션이다
* Throughput은 EBS의 성능과 관련된 또 다른 옵션인데, 특정한 Volume type에서만 지정할 수 있다
* Delete on Termination은 Volume이 할당된 EC2 인스턴스가 삭제되었을 때 자동으로 Volume을 삭제할 것인지를 선택하는 옵션이다
* 기본 Volume인 Boot Volume은 Volume type을 3개만 가질 수 있다
* 그 외에 추가로 생성하는 Volume은 5개의 Volume type을 가진다

EBS Volume Types
* General Purpose
  - 초당 3 IOPS에 기반하며 3000 IOPS까지 가능하다
  - boot volume이나 데이터베이스에 사용한다
* Provisioned IOPS 
  - 고성능의 볼륨으로 64000 IOPS와 초당 1000 MiB의 throughput을 지원한다
  - low latency가 치명적인 결과를 초래하는 경우 혹은 큰 규모의 데이터베이스에 사용한다
* Throughput Optimized HDD
  - 저렴한 마그네틱 스토리지 볼륨으로 로그처럼 처리량이 많은 경우에 적합하다
  - 로그 외에도 많은 양의 데이터가 들어오고 나가는 경우에 사용된다
  - 이 Volume type은 boot volume은 될 수 없다

Cold HDD
* 거대한 볼륨을 위한 저렴한 마그네틱 스토리지 볼륨으로 데이터에 대한 접근이 빈번하지 않은 경우에 적합하다
* 이 Volume type은 boot volume은 될 수 없다

Magnetic Volume
* 마그네틱 드라이브에 기반한 볼륨으로, 데이터 접근이 빈번하지 않은 작업에 적합하다
* 작은 볼륨 사이즈의 저렴한 스토리지를 원하는 경우에 사용하면 좋다