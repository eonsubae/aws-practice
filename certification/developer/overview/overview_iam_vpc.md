# Overview of IAM, VPC & AWS Free Tier Account

### Introduction to IAM Users, Groups, Roles and Policies

IAM
* IAM은 Identity and Access Management의 약자다
* IAM은 유저(user), 그룹(group), 정책(policie)을 활용해 AWS 계정에 접근할 수 있게 해주는 서비스다
* 유저, 그룹, 정책을 포함해 제공하는 기능들은 다음 사진과 같다

![IAMServices](./iam_overview.png);

유저(User)
* 유저는 한 사람 혹은 하나의 서비스를 대표하는 엔티티다
* 유저를 사용해 AWS에 로그인하거나 특정 서비스에 접근할 수 있다
* 유저에는 특정 정책(policy)들을 할당할 수 있다
* 또, 유저에는 Access key ID, Secret key가 할당될 수 있다
  - 이 두가지를 다른 말로 Key pair라고도 부른다
  - 이것들은 AWS API, CLI, SDK, 다른 개발 툴을 이용한 프로그래머틱한 접근에 사용된다
* management console에 접근하기 위해 비밀번호도 할당될 수 있다
* 기본적으로 막 생성된 유저에는 계정에 어떤 것에도 접근할 수 있는 권한이 없다
  - 따라서 생성된 유저에 정책(policy)을 할당해 해당 유저가 필요한 서비스에 접근할 수 있게 해줘야 한다
* 루트 계정은 이메일과 패스워드를 사용하며, 어떤 제한도 받지 않고 서비스에 접근할 수 있는 권한을 가지고 있다
  - 너무 강력한 권한을 가지고 있기 때문에 루트 계정을 직접 사용해 서비스를 관리하는 것은 바람직하지 않다
  - 특정 서비스에 직접 접근하기 보다는 서비스에 필요한 유저와 정책, 그룹 등을 만들 때에 루트 유저를 사용하는 것이 좋다 
  - 절대 다른 사람과 루트 계정을 공유하지 않는 것이 좋다
  - 필요하다면 특정 유저에 관리자 권한을 할당해 줄수도 있다
* MFA(Multi Factor Authentication)을 사용해 계정의 보호를 강화할 수 있다
* 유저는 특정 어플리케이션을 대표하기 위해 만드는 경우가 많다
  - 이 때, 이 유저를 서비스 계정(Service account)라고 부른다
* 하나의 AWS 계정당 5000명의 유저를 생성할 수 있다
  - 각각의 유저는 별칭과 아마존 자원 이름(ARN-Amazon Resource Name)이 할당된다
  - ARN은 AWS 안에서 각각의 유저를 구분하기 위한 유니크 식별자다

그룹(Group)
* 그룹은 유저의 무리를 지칭한다
* 유저와 마찬가지로 그룹에도 정책(policy)를 할당할 수 있다
* 만약 여러 유저에게 한 번에 정책을 할당하고 싶다면 그룹을 사용하는 것이 좋다
* 예를 들어, 한 회사 내에서 직군별로 그룹을 생성해 정책을 할당하면 반복적인 작업을 줄일 수 있다  
  - ex. Developer, Sysadmin, etc department
* 그룹 자체는 어떤 권한과 관련된 내용이 없다
  - 다만 그룹에 정책을 할당하는 것이 가능할 뿐이다
* 가능한 필요한 최소한의 정책을 할당하는 것이 베스트 프랙티스다
* 그룹 안의 또 다른 그룹을 만드는 중첩은 불가능하다

역할(Role)
* 역할은 신뢰할 수 있는 엔티티에 의해 권한을 부여받는 기능이다
* 한마디로 위임된 권한이라고 볼 수 있다
* 여러 정책을 그룹지어 역할의 권한을 정의할 수 있다
  - ex. S3 Full Access, DynamoDB Read-Only, AWSLambdaBasicExecutionRole
* 역할은 AWS의 특정 서비스에서 사용될 수 있는데 다른 것들과 구분되는 장점이 있다면 영구적인 계정(유저이름과 비밀번호가 필요한 계정)을 사용하지 않고도 권한을 위임할 수 있다는 것이다
  - password도 access key도 필요없다
* IAM user와 AWS 서비스들은 역할을 임시적인 보안 계정으로 추정해 AWS API 호출을 사용할 수 있게 해준다

정책(Policy)
* 정책은 하나의 권한이며 유저, 그룹, 역할에 할당될 수 있다.
* S3 Full Access, DynamoDB Read-Only, AWSLambdaBasicExecutionRole
* 정책은 JSON 형식으로 작성된다.
* 모든 정책은 기본적으로 거부된다
  - 즉, S3 Full Access가 할당되기 이전에 S3 Full Access정책이 적용되었을 때와 같이 접근하는 것은 자동적으로 거부된다
* 최대 제한 정책이 적용된다
* IAM policy simulator는 접근 제한 정책의 효과들을 이해하고 테스트하고 검증하는 데 도움을 주는 도구다
* 상태 요소(Condition element)를 사용해 특정 상태에서만 권한의 적용을 사용할 수도 있다
  - 예를 들어 특정 IP로부터의 접근에서만 특정 정책을 허용하는 것
