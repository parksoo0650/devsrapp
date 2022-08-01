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

        {/* 일정 표시 */}
        <div className={cn('ScheduleTable')}>
          <div className={cn('DawnCrusade')}>새벽성회</div>
          <div className={cn('Breakfast')}>아침식사</div>
          <div className={cn('Rest1')}>휴식</div>
          <div className={cn('HappyLecture')}>행복한 특강</div>
          <div className={cn('LectureForEveryone')}>전교인 특강</div>
          <div className={cn('Lunch')}>점심식사</div>
          <div className={cn('Rest2')}>휴식</div>
          <div className={cn('Recreation')}>
            행복 더하기 <br /> (레크레이션)
          </div>
          <div className={cn('HealingCrusade')}>신유집회</div>
          <div className={cn('SungrakCinema')}>성락시네마</div>
          <div className={cn('Rest3')}>휴식</div>
          <div className={cn('Dinner')}>저녁식사</div>
          <div className={cn('Rest4')}>휴식</div>
          <div className={cn('EveningCrusade')}>저녁성회</div>
        </div>
      </div>
    </div>
  );
};

export default CampSchedule;
