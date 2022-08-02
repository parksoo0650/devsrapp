import CampHeader from '../CampHeader/CampHeader';
import classNames from 'classnames/bind';
import styles from './CampSchedule.module.scss';

const cn = classNames.bind(styles);

const CampSchedule = ({ onClick }) => {
  return (
    <div className={cn('CampSchedule')}>
      <CampHeader onClick={onClick} title='여름수련회 프로그램' />
      <br />
      <br />

      <nav>
        {/* 공유 버튼 */}
        <button />

        {/* 날짜 */}
        <ul>
          <li>첫째날 8. 3 (수)</li>
          <li>둘째날 8. 4 (목)</li>
          <li>셋째날 8. 5 (금)</li>
        </ul>
      </nav>

      <div className={cn('flexBox')}>
        {/* 시간 표시 자리 왼쪽 빈 공간*/}
        <div />

        {/* 일정 표시 */}
        <div className={cn('ScheduleTable')}>
          <div className={cn('item', 'DawnCrusade')}>
            새벽성회 <span>8시</span>
          </div>
          <div className={cn('item', 'Breakfast')}>아침식사</div>
          <div className={cn('item', 'Rest1')}>휴식</div>
          <div className={cn('item', 'HappyLecture')}>행복한 특강</div>
          <div className={cn('item', 'LectureForEveryone')}>전교인 특강</div>
          <div className={cn('item', 'Lunch')}>점심식사</div>
          <div className={cn('item', 'Rest2')}>휴식</div>
          <div className={cn('item', 'Recreation')}>
            행복 더하기 <br /> (레크레이션)
          </div>
          <div className={cn('item', 'HealingCrusade')}>신유집회</div>
          <div className={cn('item', 'SungrakCinema')}>성락시네마</div>
          <div className={cn('item', 'Rest3')}>휴식</div>
          <div className={cn('item', 'Dinner')}>저녁식사</div>
          <div className={cn('item', 'Rest4')}>휴식</div>
          <div className={cn('item', 'EveningCrusade')}>저녁성회</div>

          <div className={cn('blank1')} />
          <div className={cn('blank2')} />
          <div className={cn('blank3')} />
          <div className={cn('blank4')} />
          <div className={cn('blank5')} />
          <div className={cn('blank6')} />
          <div className={cn('blank7')} />
        </div>
      </div>

      {/* 시간 표시 */}
      <div className={cn('Timetable')}>
        <p>06</p>
        <p>07</p>
        <p>08</p>
        <p>09</p>
        <p>10</p>
        <p>11</p>
        <p>12</p>
        <p>13</p>
        <p>14</p>
        <p>15</p>
        <p>16</p>
        <p>17</p>
        <p>18</p>
        <p>19</p>
        <p>20</p>
        <p>21</p>
        <p>22</p>
      </div>
    </div>
  );
};

export default CampSchedule;
